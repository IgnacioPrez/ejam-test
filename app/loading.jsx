import loadingStyle from './page.module.css'
const loading = () => {
  return (
    <div className={loadingStyle.loading}>
      <p>loading...</p>
    </div>
  )
}

export default loading