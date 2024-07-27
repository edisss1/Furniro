interface CopiedProps {
  copied: boolean
}

const Copied = ({ copied }: CopiedProps) => {
  return (
    <>
      <div
        className={`absolute   top-[120%] ${copied ? "animate-appear" : ""}`}>
        {copied ? <p>Text copied to clipboard</p> : null}
      </div>
    </>
  )
}
export default Copied
