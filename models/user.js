import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Cet email est déjà utilisé.'],
    required: [true, 'Email obligatoire'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Identifiant invalide, il doit être unique et contenir entre 8 et 20 caractères."]
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema);

export default User;