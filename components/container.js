export default function Container({ children, className, showToggles }) {
  return(
  <>
    <div className={`container max-w-screen-xl mx-auto md:px-4 text-sm sm:text-base ${className ? className : ''}`}>{children}</div>
  </>);
}
