export function getPropertyCategory(category) {
  if (category == "used") {
    return {
      used: null,
    };
  } else if (category == "new") {
    return {
      new: null,
    };
  } else if (category == "land") {
    return {
      land: null,
    };
  } else if (category == "") {
    return {
      land: null,
    };
  } else {
    return [];
  }
}
