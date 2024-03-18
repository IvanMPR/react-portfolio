import { TailSpin } from "react-loader-spinner";

function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <TailSpin
        visible={true}
        height='80'
        width='80'
        color='var(--color-primary)'
        ariaLabel='tail-spin-loading'
        radius='1'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
}
export default Spinner;
