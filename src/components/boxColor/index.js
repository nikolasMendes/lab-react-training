import style from './style.module.css';

export function BoxColor(props) {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px',
        display: 'flex',
        border: '3px solid black',
        height: '100px',
        width: '500px',
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
      }}>
      rgb({props.r},{props.g},{props.b})
    </div>
  );
}