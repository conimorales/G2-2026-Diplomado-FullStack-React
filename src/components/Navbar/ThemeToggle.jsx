function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="btn btn-outline-secondary btn-sm"
      type="button"
      title="Cambiar tema"
      onClick={onToggle}
    >
      <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
    </button>
  )
}

export default ThemeToggle