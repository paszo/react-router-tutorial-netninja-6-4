export default function Contact(){
    return (
        <div className="contact">
           <h3>Contact us</h3>
            <form>
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required/>
                </label>
               <button>Submit</button>
            </form>
        </div>
    )
}