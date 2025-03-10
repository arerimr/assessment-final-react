import { useState, useEffect } from "react"
import { gettingPeople } from "../Fetch"
import NotFound from "./NotFound"

export default function People() {
    const [searchInput, setSearchInput] = useState("")
    const [people, setPeople] = useState([])
    const [person, setPerson] = useState([])
    const [loadingError, setLoadingError] = useState(false)

    async function settingPeople() {
        const allPeople = await gettingPeople()
        setPeople(allPeople)
        console.log(people)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const personArr = people.filter((p) => {
            return p.name.toLowerCase() === searchInput.toLowerCase()
        })
        setPerson(personArr)
        setSearchInput("")
        !personArr.length ? setLoadingError(true) : setLoadingError(false)
        console.log(personArr)
    }

    useEffect(() => {
        settingPeople()
    }, [])

    // useEffect(()=>{
    //     filteringPeople()
    // }, [searchInput])

    return (
        <div className="people">
            <h2>Search for a Person</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    id="search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="submit">submit</button>
            </form>
            {
                loadingError ? (<NotFound />) : (
                    person.map((x) => {
                        return (
                            <aside>
                                <h2><span>Name: </span>{x.name}</h2>
                                <p><span>Age: </span>{x.age}</p>
                                <p><span>Eye Color: </span>{x.eye_color}</p>
                                <p><span>Hair Color: </span>{x.hair_color}</p>
                            </aside>
                        )
                    })
                )
            }
        </div>
    )
}