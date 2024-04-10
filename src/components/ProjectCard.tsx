export default function ProjectCard(props: {name: string}){
    return(
        <div className="py-2">
            <div className="py-4 rounded shadow border border-gray-400">
                <strong>This will be a project card</strong>
                <h4>{props.name}</h4>
                <div className="container inline-flex">
                    <div className="px-4">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Link to repo
                    </button>
                    </div>
                    <div className="px-4">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Link to deployed project
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}