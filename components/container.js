export default function Container({ children, className }) {
  return <div className={`container max-w-screen-xl mx-auto sm:px-4 text-sm sm:text-base ${className}`}>{children}</div>
}
