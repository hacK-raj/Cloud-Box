# CloudBox – Personal Cloud File Storage

CloudBox is a Google-Drive-like web application built using **Node.js**, **Express**, **MongoDB**, and **Firebase Storage**.
Users can register, log in, upload, download, and view personal files securely.

---

## 🚀 Features

✅ User Authentication (Login / Registration)  
✅ JWT Protected Routes  
✅ File Upload using Multer  
✅ Secure Download Signed URLs  
✅ Firebase Cloud Storage Integration  
✅ User-specific File Management  
✅ EJS View Engine with clean UI  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| Node.js | Backend Runtime |
| Express.js | Web Framework |
| MongoDB (Mongoose) | Database |
| Firebase Storage | Cloud File Storage |
| Multer | File Upload Handling |
| JWT | Authentication |
| EJS | Templating |

---

## 📂 Project Structure

Drive/
│
├─ config/
│ ├─ db.js
│ ├─ firebase.config.js
│ ├─ multer.config.js
│
├─ models/
│ ├─ user.models.js
│ ├─ files.models.js
│
├─ middlewares/
│ ├─ authe.js
│
├─ routes/
│ ├─ user.routes.js
│ ├─ files.routes.js
│
├─ public/
│
├─ views/
│ ├─ home.ejs
│ ├─ login.ejs
│ ├─ register.ejs
│
├─ server.js
└─ package.json



---

## 📦 Installation

Clone the repository:

bash--
git clone https://github.com/hacK-raj/Drive-

Go inside the project folder:
cd Drive-

Install dependencies:
npm install

🔑 Environment Setup (.env)

Create a .env file:

PORT=3000
MONGODB_URI=your_mongodb_url
JWT_SECRET=your_secret
FIREBASE_BUCKET_NAME=your_bucket_name

Add Firebase credentials JSON file in config folder.

▶️ Run the App
npm start


Now open in your browser:

http://localhost:3000

## 👤 User Flow

1.Register a new account
2.Login
3.Redirected to home page
4.Upload files
5.Download securely via signed URL

## 🔐 Authentication

All file-related routes are protected:

authMiddleware


Ensures only logged-in users access their files.

## ☁️ File Storage

Multer handles file upload
Firebase stores files securely
Signed URL expires automatically for safety

## 💡 Future Enhancements

File preview support

Multiple file upload

Folder-based storage

User profile settings

Download counters

## 🤝 Contributing

Pull requests are welcome.
Open an issue for feature requests.

## 📄 License

This project is Open Source.

## 👨‍💻 Author

Rajdeep Seal
BTech CST @ JIS College of Engineering
Passionate about Backend & Cloud Development
