export default function Button({children, backgroundColor, textColor, handler}) {
  return (
    <button style={{backgroundColor: backgroundColor, color: textColor}} onClick={handler}>
      {children}
    </button>
  )
}

