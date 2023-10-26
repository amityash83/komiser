import { SVGProps } from 'react';

const DragIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
    {...props}
  >
    <path
      d="M9 3.63159V3.22106C9 2.88773 9.18056 1.57645 10.7363 1.57645C12.292 1.57645 12.3333 2.68771 12.5 3.02104V7.13159V4.13159C12.5 3.79826 12.6698 2.63159 14.1366 2.63159C15.7366 2.63159 16 3.63159 16 4.13159V7.63159V5.63159C16 5.29826 16.2924 4.13159 17.3814 4.13159C18.5814 4.13159 19 5.13159 19 5.63159C19 6.29826 19 8.03159 19 9.63159C19 11.6316 18.5 14.1316 18 16.1316C17.6 17.7316 16.1667 19.7983 15.5 20.6316H7.99999C4.49998 18.1316 2.5 13.1316 2 11.6316C1.5 10.1316 1.5 7.63159 2.5 6.63159C3.3 5.83159 4.83333 4.96493 5.49999 4.63159V11.1316V4.13159C5.5 3.13159 5.86913 2.15429 7.22482 2.15429C8.46938 2.15429 9 3.13159 9 3.63159ZM9 3.63159V7.13159V7.63159V3.63159Z"
      stroke="#0C1717"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
  </svg>
);

export default DragIcon;
