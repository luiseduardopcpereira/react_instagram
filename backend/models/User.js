const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String

  },{
    // config do model - marca o horario que usuario foi criado e hora que foi atualizado
    timestamps:true
  })

  const User = mongoose.model("User", userSchema);

  module.exports = User;