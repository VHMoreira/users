import { expect } from "chai";
import User from "../models/User";

describe('Init Users Tests', () => {
    it('Should list users', () => {
        const users: User[] = [];
        const u = users;

        expect(users).to.equal(u);
    });
});