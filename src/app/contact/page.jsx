"use client"
import { useState } from "react"
import Alert from '@/components/alert'

function Contact() {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState('');
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [alertType, setAlertType] = useState("");

    const handleSend = async () => {

        if (fullname === "" || email === "" || tel === '' || message === '') {
            setAlert("Complete all fields");
            setIsAlertVisible(true);
            setAlertType("error");
            return;
        }

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullname,
                    email,
                    message,
                }),
            });


            if (res.ok) {
                setAlert("Message sent succesfully");
                setAlertType("success");
            } else {
                setAlert("Error sending message");
                setAlertType("error");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setAlert("Error sending message");
            setAlertType("error");
        }



        setFullname("");
        setEmail("");
        setMessage("");
        setTel("");

        setTimeout(() => {
            setIsAlertVisible(false);
            setAlert("");
            setAlertType("");
        }, 2000);


    }
    return (
        <div className="flex flex-col justify-center pt-20 ">
            <div className="grid grid-cols-2">
                <div className="grid-col-1 ">
                    <div className="flex justify-center">
                        <h1 className="text-2xl">Send us a message</h1>
                        <i class='bx bx-leaf text-2xl text-green-800 pl-2'></i>
                    </div>

                </div>

                <form>
                    <input
                        type="text"
                        id="fullname"
                        className="border py-2 mb-4 w-1/2 rounded"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        placeholder="Full name"
                    />

                    <input
                        type="email"
                        id="email"
                        className="border py-2 mb-4 w-1/2 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        id="tel"
                        className="border py-2 mb-4 w-1/2 rounded"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        placeholder="Phone"
                    />
                    <textarea
                        id="message"
                        className="border mb-4 w-full resize-none rounded"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            handleSend()
                        }}
                        className="border rounded border-gray-200 hover:border-gray-800 px-3 py-2 ml-10">
                        Send
                    </button>
                    {isAlertVisible && (
                        <Alert
                            alert={alert}
                            alertType={alertType}
                            onClose={() => setIsAlertVisible(false)}
                        />
                    )}

                </form>

            </div>

        </div>
    )
}

export default Contact