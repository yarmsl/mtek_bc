export const formatPhoneNumber = (
  phoneNumber: string,
  startWith: "+7" | "8" = "+7"
) => {
  const num = phoneNumber.replace(/\D+/g, "");
  const basis = num.length === 11 ? num.substring(1) : num;

  return basis.replace(
    /(\d{3})(\d{3})(\d{2})(\d{2})/g,
    `${startWith} ($1) $2-$3-$4`
  );
};
