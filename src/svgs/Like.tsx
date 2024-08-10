interface LikeProps {
  className: string
  stroke: string
}

const Like = ({ className, stroke }: LikeProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z"
        stroke={stroke}
        strokeWidth="1.8"
      />
    </svg>
  )
}
export default Like
