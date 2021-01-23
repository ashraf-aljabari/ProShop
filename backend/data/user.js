import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ashraf Al-Jabari',
    email: 'ashraf@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'jordan',
    email: 'jordan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
