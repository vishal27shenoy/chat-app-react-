export const validator = (userName, email, password) => {
  if (userName.trim() == "") {
    return "Enter the username";
  } else if (email.trim() == "") {
    return "Enter the email";
  } else if (password.trim() == "") {
    return "Enter the password";
  }
  return true;
};

export const Loginvalidator = (email, password) => {
  if (email.trim() == "") {
    return "Enter the email";
  } else if (password.trim() == "") {
    return "Enter the password";
  }
  return true;
};
