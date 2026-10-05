import { UserModel } from "./user.model.js";
import { ProfileModel } from "./profile.model.js";

// Relación 1 a 1  User <-> Profile
UserModel.hasOne(ProfileModel, {
  foreignKey: "user_id",
  as: "profile",
  onDelete: "CASCADE",
});

ProfileModel.belongsTo(UserModel, {
  foreignKey: "user_id",
  as: "user",
});



export { UserModel, ProfileModel};
