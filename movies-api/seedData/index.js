import userModel from '../api/users/userModel';
import genresModel from '../api/genres/genresModel';
import users from './users';
import geners from './genres'
import dotenv from 'dotenv';

dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
    console.log('load user Data');
    try {
        await userModel.deleteMany();
        await userModel.collection.insertMany(users);
        console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
        console.error(`failed to Load user Data: ${err}`);
    }
}

async function loadGenres() {
    console.log('load genres Data');
    try {
        await genresModel.deleteMany();
        await genresModel.collection.insertMany(geners);
        console.info(`${geners.length} geners were successfully stored.`);
    } catch (err) {
        console.error(`failed to Load geners Data: ${err}`);
    }
}

if (process.env.SEED_DB) {
    loadUsers();
    loadGenres();
}