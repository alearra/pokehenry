export default function Validate(input) {
  let errors = {};
  let validateLetters = /^[a-zA-Z]+$/;
  let validateDigits = /^[0-9]+$/;
  let validateUrl = /^(ftp|http|https):\/\/[^ "]+$/;

  if (!input.name || input.name === "  " || !validateLetters.test(input.name))
    errors.name = "The name is required";

  if (!input.image || !validateUrl.test(input.image))
    errors.image = "Picture required";

  if (
    !input.hp ||
    input.hp < 0 ||
    input.hp > 300 ||
    !validateDigits.test(input.hp)
  )
    errors.hp = "Health Points required";

  if (
    !input.attack ||
    input.attack < 0 ||
    input.attack > 200 ||
    !validateDigits.test(input.attack)
  )
    errors.attack = "Attack is required";

  if (
    !input.defense ||
    input.defense < 0 ||
    input.defense > 300 ||
    !validateDigits.test(input.defense)
  )
    errors.defense = "Defense is required";

  if (
    !input.speed ||
    input.speed < 0 ||
    input.speed > 200 ||
    !validateDigits.test(input.speed)
  )
    errors.speed = "Speed is required";

  if (
    !input.height ||
    input.height < 0 ||
    input.height > 20 ||
    !validateDigits.test(input.height)
  )
    errors.height = "Height is required";

  if (
    !input.weight ||
    input.weight < 0 ||
    input.weight > 1000 ||
    !validateDigits.test(input.weight)
  )
    errors.weight = "Weight is required";

  return errors;
}
