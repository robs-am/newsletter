// eslint-disable-next-line react/prop-types
const Button = ({ title }) => {
  return (
    <button
      required
      className="text-white bg-darkGrey  rounded-md py-4 px-6 font-bold lg:hover:bg-gradient-primary"
      type="submit"
    >
      <span>{title}</span>
    </button>
  );
};

export default Button;
