import "./piechart.css";

const PieChart = ({ className, percent,language }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`flex justify-center items-center`}>
        <div className="box" style={{ "--p": percent }}></div>
        <h1 className="absolute text-xl">{percent}%</h1>
      </div>
      <h1 className="text-xl">{language}</h1>
    </div>
  );
};
export default PieChart;
