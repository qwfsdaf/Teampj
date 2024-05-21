require('dotenv').config();
const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const app = express();
const upload = multer({ dest: 'uploads/' });

// 정적 파일 제공을 위한 설정
app.use(express.static('public'));

// 루트 URL 요청 처리
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const imagePath = req.file.path;
        const image = fs.readFileSync(imagePath);
        const base64Image = Buffer.from(image).toString('base64');

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        };
        const payload = {
            model: "gpt-4o",
            messages: [{
                role: "user",
                content: [{
                        type: "text",
                        text: "이 이미지에 세탁기호만 핵심만 숫자를 매겨서 단답형으로 해석해줘"
                    },
                    {
                        type: "image_url",
                        image_url: {
                            url: `data:image/jpeg;base64,${base64Image}`
                        }
                    }
                ]
            }],
            max_tokens: 300
        };

        const response = await axios.post('https://api.openai.com/v1/chat/completions', payload, { headers });
        let description = response.data.choices[0].message.content;

        // 줄바꿈과 대시 제거
        description = description.replace(/\n/g, ' ').replace(/-/g, '');
        res.json({ description });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});