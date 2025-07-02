

---

## 📘 **Student Management System (React CRUD Project)**

### 🛠️ Description:

This is a **Student Management System** built using **React.js** that performs full **CRUD operations** — Create, Read, Update, and Delete — for managing student data. The project features a smooth user interface with a responsive layout, form validations, dynamic routing, and real-time data updates.

---

### 🚀 **Features**:

* ➕ Add new students with class, percentage, and status
* 📋 View a list of all students in a dynamic table
* ✏️ Edit student details using dynamic routing and pre-filled forms
* 🗑️ Delete students with confirmation alerts
* ✅ Real-time UI updates after each operation
* 💻 Clean, professional, and responsive UI with custom CSS

---

### 🧠 **Concepts & Technologies Used**:

| Concept / Tool     | Purpose                                                     |
| ------------------ | ----------------------------------------------------------- |
| `React.js`         | For building reusable UI components and SPA                 |
| `useState`         | To manage form inputs and student list                      |
| `useEffect`        | To fetch data on component load                             |
| `React Router DOM` | For navigating between pages and editing with dynamic `:id` |
| `Axios`            | For making HTTP requests to the backend                     |
| `JSON Server`      | Acts as a fake REST API for storing student data            |
| `Custom CSS`       | For creating a clean, modern, and responsive layout         |

---

### 🗂️ **Folder Structure**:

```
React-CRUD-Operations/
│
├── /public
├── /src
│   ├── /Pages
│   │   ├── Addstudents.jsx
│   │   ├── Editstudents.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   └── App.css
├── db.json          ← JSON Server data
└── package.json
```

---

### ⚙️ **How to Run This Project Locally**

1. **Clone the repository**

```bash
git clone https://github.com/nameispartha/React-CRUD-Operations.git
cd React-CRUD-Operations
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the React App**

```bash
npm start
```

4. **Run JSON Server**

```bash
npx json-server --watch db.json --port 3001
```


### 👨‍💻 **Author**:

**Partha Sarathi** – React Frontend Developer
🌐 [LinkedIn]( https://www.linkedin.com/in/parthasarathi-k-417102220/  ) | 💻 [GitHub](https://github.com/nameispartha)

---



