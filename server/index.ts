// import express, { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
// import cors from 'cors';
// import { randomBytes } from 'crypto';

// const app = express();
// const PORT = 3001;
// const SECRET_KEY = randomBytes(32).toString('hex');


// app.use(cors());
// app.use(express.json());

// interface User {
//     username: string;
//     password: string;
//     role: string;
// }

// const users: User[] = [
//     {
//         username: 'admin',
//         password: '$2b$10$BYpOMM/pdBcXyjE7OO4RIe16Bl26ovB9r/sOYz5zj3TmjvhCMQdm6', // bcrypt hash of 'adminpass'
//         role: 'admin',
//     },
//     {
//         username: 'user',
//         password: '$2b$10$VbQWv6H9EW0t8ZZi6.FOM.NlHtW0UL5AODDvhPikMSSyLE3yO4Gfi', // bcrypt hash of 'userpass'
//         role: 'user',
//     },
// ];



// app.post('/login', (req: Request, res: Response) => {
//     const { username, password } = req.body;
//     const user = users.find((u) => u.username === username);

//     if (user) {
//         console.log('bcrypt.compareSync(password, user.password)', bcrypt.compareSync(password, user.password));

//     }

//     if (!user || !bcrypt.compareSync(password, user.password)) {
//         return res.status(401).json({ message: 'Invalid username or password' });
//     }
//     else {
//         console.log("In else block");

//     }

//     const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY);

//     return res.json({ token });
// });


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



// import bodyParser from 'body-parser';

// interface Item {
//     id: number;
//     name: string;
// }


// app.use(bodyParser.json());

// let jsonData: Item[] = [
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Smith' },
//     { id: 3, name: 'Bob Johnson' },
// ];

// // Get all JSON data
// app.get('/data', (req: Request, res: Response) => {
//     res.json(jsonData);
// });

// // Get a specific JSON item
// app.get('/data/:id', (req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id);
//     const item: Item | undefined = jsonData.find((item: Item) => item.id === id);

//     if (item) {
//         res.json(item);
//     } else {
//         res.status(404).json({ error: 'Item not found' });
//     }
// });

// // Create a new JSON item
// app.post('/data', (req: Request, res: Response) => {
//     const newItem: Item = req.body;
//     jsonData.push(newItem);
//     res.status(201).json(newItem);
// });

// // Update an existing JSON item
// app.put('/data/:id', (req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id);
//     const updatedItem: Item = req.body;
//     const index: number = jsonData.findIndex((item: Item) => item.id === id);

//     if (index !== -1) {
//         jsonData[index] = { ...jsonData[index], ...updatedItem };
//         res.json(jsonData[index]);
//     } else {
//         res.status(404).json({ error: 'Item not found' });
//     }
// });

// // Delete a JSON item
// app.delete('/data/:id', (req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id);
//     const index: number = jsonData.findIndex((item: Item) => item.id === id);

//     if (index !== -1) {
//         const deletedItem: Item = jsonData.splice(index, 1)[0];
//         res.json(deletedItem);
//     } else {
//         res.status(404).json({ error: 'Item not found' });
//     }
// });


// import dotenv from "dotenv";
// import express, { Express, Request, Response } from "express";
// import path from "path";
// import cors from "cors";
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { randomBytes } from 'crypto';

// const SECRET_KEY = randomBytes(32).toString('hex');

// dotenv.config();

// const app: Express = express();

// app.use(express.json());
// app.use(cors());

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello World From the Typescript Server!')
// });
// interface User {
//     username: string;
//     password: string;
//     role: string;
// }

// const users: User[] = [
//     {
//         username: 'admin',
//         password: '$2b$10$BYpOMM/pdBcXyjE7OO4RIe16Bl26ovB9r/sOYz5zj3TmjvhCMQdm6', // bcrypt hash of 'adminpass'
//         role: 'admin',
//     },
//     {
//         username: 'user',
//         password: '$2b$10$VbQWv6H9EW0t8ZZi6.FOM.NlHtW0UL5AODDvhPikMSSyLE3yO4Gfi', // bcrypt hash of 'userpass'
//         role: 'user',
//     },
// ];

// app.post('/login', (req: Request, res: Response) => {
//     const { username, password } = req.body;
//     const user = users.find((u) => u.username === username);

//     if (!user || !bcrypt.compareSync(password, user.password)) {
//         return res.status(401).json({ message: 'Invalid username or password' });
//     }

//     const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY);
//     res.json({ token });
// });

// const port = process.env.PORT || 8000;

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// });





// interface FormInputs {
//     email: string,
//     password: string
// }

// // Array of example users for testing purposes
// const users = [
//     {
//         id: 1,
//         name: 'Rakesh M',
//         email: 'rmishra@example.com',
//         password: 'rmishra'
//     },
//     {
//         id: 2,
//         name: 'Juan Doe',
//         email: 'juan@example.com',
//         password: 'juan123'
//     }
// ];

// // route login
// app.post('/login', (req: Request, res: Response) => {
//     const { email, password }: FormInputs = req.body;

//     const user = users.find(user => {
//         return user.email === email && user.password === password
//     });

//     if (!user) {
//         return res.status(404).send('User Not Found!')
//     }

//     return res.status(200).json(user)
// });
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cors from 'cors';
import { randomBytes } from 'crypto';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;
const SECRET_KEY = randomBytes(32).toString('hex');

interface User {
    username: string;
    password: string;
    role: string;
}

const users: User[] = [
    {
        username: 'admin',
        password: bcrypt.hashSync('adminpass', 10),
        role: 'admin',
    },
    {
        username: 'user',
        password: bcrypt.hashSync('userpass', 10),
        role: 'user',
    }
];

const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(cors());

// Login endpoint
app.post('/login', (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY);
    res.json({ token });
});

// Middleware to check if JWT token is valid and has the correct role
function checkRole(role: string) {
    return (req: Request, res: Response, next: express.NextFunction) => {
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Missing authentication token' });
        }

        try {
            const decodedToken = jwt.verify(token, SECRET_KEY) as { username: string; role: string };
            if (decodedToken.role !== role && decodedToken.role !== 'admin') {
                return res.status(401).json({ message: 'Insufficient permissions' });
            }
            next();
        } catch (err) {
            return res.status(401).json({ message: 'Invalid authentication token' });
        }
    };
}

// Example data
const exampleData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 40 },
];

// CRUD endpoints
app.get('/data', checkRole('user'), (req: Request, res: Response) => {
    res.json(exampleData);
});

app.get('/data/:id', checkRole('user'), (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const data = exampleData.find((d) => d.id === id);
    if (!data) {
        return res.status(404).json({ message: 'Data not found' });
    }
    res.json(data);
});

app.post('/data', checkRole('admin'), (req: Request, res: Response) => {
    const newData = req.body;
    exampleData.push(newData);
    res.json(newData);
});

app.put('/data/:id', checkRole('admin'), (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const newData = req.body;
    const index = exampleData.findIndex((d) => d.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Data not found' });
    }
    exampleData[index] = newData;
    res.json(newData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
