const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      minlength: 2,
      maxlength: 20,
      trim: true
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    creditcard: {
      ccholder: {
        type: String,
        required: true,
      },
      ccnumber: {
        type: Number,
        minlength: 16,
        required: true,
      },
      ccexpiration: {
        type: String,
        required: true,
      },

    },

    address: {
      street: {
        streetName: {
          type: String,
          required: true
        },

        streetNumber: {
          type: Number,
          required: true
        },
      },

      postCode: {
        type: Number,
        required: true
      },

      city: {
        type: String,
        required: true
      },

      country: {
        type: String,
        required: true
      },
    },


    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER',
      required: true,
    },
  },
  {

    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
