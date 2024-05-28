import { useEffect, useState } from "react"
import "./App.css"
import { Link, useParams } from "react-router-dom"

function Country() {
  const [data, setData] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const params = useParams()

  const fetchData = async () => {
    try {
      let resp = await fetch(
        `https://restcountries.com/v3.1/name/${params.country}`
      )
      resp = await resp.json()
      setData(resp[0])
      setLoading(false)
    } catch (e) {
      setError(e.toString())
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])

  return (
    <>
      <main>
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 link-dark">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-dark">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-dark">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-dark">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-dark">
                  About
                </a>
              </li>
            </ul>

            <div className="col-md-3 text-end">
              <button type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary">
                Sign-up
              </button>
            </div>
          </header>
        </div>

        <main className="container">
          <div className="bg-light p-5 rounded">
            {!data && loading && (
              <>
                <p className="d-flex flex-wrap align-items-center justify-content-center">
                  loading...
                </p>
              </>
            )}

            {error && (
              <>
                <p className="d-flex flex-wrap align-items-center justify-content-center">
                  {error}
                </p>
              </>
            )}

            {data && (
              <>
                <h1>
                  {data.name.common} {data.flag}
                </h1>
                <p className="lead">{data.capital}</p>
                <p>{data.name.official}</p>
                <p>{data.region}</p>
                <p>{data.name.subregion}</p>
              </>
            )}
          </div>
        </main>
      </main>
    </>
  )
}

export default Country
