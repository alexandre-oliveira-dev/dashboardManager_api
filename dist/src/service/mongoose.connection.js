"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodb = void 0;
const mongoose_1 = require("mongoose");
function mongodb() {
    mongoose_1.default.connect('mongodb+srv://alexandredevfrontend:GXu2Pq7nCIe8QL90@dashboardmanagerdb.pokh6lk.mongodb.net/?retryWrites=true&w=majority&appName=dashboardManagerDB');
    mongoose_1.default.set('strictQuery', false);
}
exports.mongodb = mongodb;
//# sourceMappingURL=mongoose.connection.js.map