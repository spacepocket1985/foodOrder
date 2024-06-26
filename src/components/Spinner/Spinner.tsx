import styles from './Spinner.module.css'

export const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ margin: 'auto', background: 'none', display: 'block' }}
      width="128px"
      height="128px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="translate(26.666666666666668,26.666666666666668)">
        <rect x="-20" y="-20" width="40" height="40" fill="#d210dd">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="-0.3s"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(73.33333333333333,26.666666666666668)">
        <rect x="-20" y="-20" width="40" height="40" fill="#4e0b81">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="-0.2s"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(26.666666666666668,73.33333333333333)">
        <rect x="-20" y="-20" width="40" height="40" fill="#4e0b81">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="0s"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(73.33333333333333,73.33333333333333)">
        <rect x="-20" y="-20" width="40" height="40" fill="#a911cf">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="-0.1s"
          ></animateTransform>
        </rect>
      </g>
    </svg>
    </div>
  );
};
