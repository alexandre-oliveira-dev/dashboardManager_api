import mongoose from 'mongoose';

export function mongodb() {
  mongoose.connect(
    'mongodb+srv://alexandredevfrontend:GXu2Pq7nCIe8QL90@dashboardmanagerdb.pokh6lk.mongodb.net/?retryWrites=true&w=majority&appName=dashboardManagerDB',
  );
  mongoose.set('strictQuery', false);
}
