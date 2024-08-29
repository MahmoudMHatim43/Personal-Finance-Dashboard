import PropTypes from "prop-types";

function OperationView({ operation }) {
  const { icon: Icon, color, title } = operation;

  return (
    <div className="relative z-20 col-span-1 flex flex-col h-[12.5svh] p-4 font-lato bg- dark:bg-black-b2 text-center sm:text-start rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
      <Icon
        size={100}
        color={color}
        className="absolute right-5 sm:right-1/3 translate-x-1/2 top-0 opacity-30 -z-10"
      />
      <span className="text-xl font-roboto font-semibold">{title}</span>
    </div>
  );
}

OperationView.propTypes = {
  operation: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default OperationView;
