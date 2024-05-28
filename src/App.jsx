import { useEffect, useState } from "react"
import "./App.css"
import { Link } from "react-router-dom"

function App() {
  const [data, setData] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      let resp = await fetch("https://restcountries.com/v3.1/all")
      resp = await resp.json()
      setData(resp)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      setError(e.toString())
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
                <a href="#" className="nav-link px-2 link-secondary">
                  Home
                </a>
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
          <div className="list-group w-auto">
            {loading && (
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

            {data &&
              data.map((v, i) => {
                return (
                  <Link
                    to={`/${v.name.common}`}
                    className="list-group-item list-group-item-action d-flex gap-3 py-3"
                    aria-current="true"
                    key={i}
                  >
                    <img
                      src={v.flags.svg}
                      alt="twbs"
                      width="32"
                      height="32"
                      className="rounded-circle flex-shrink-0"
                    />
                    <div className="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 className="mb-0">{v.name.common}</h6>
                        <p className="mb-0 opacity-75">{v.capital}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
          </div>
        </main>
      </main>
    </>
  )
}

export default App
