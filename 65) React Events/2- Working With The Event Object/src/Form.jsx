function handleFormSubmit(evt) {
evt.preventDefault();  // This line prevents the page to refresh.
console.log("SUBMITTED THE FORM!");
}


export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}