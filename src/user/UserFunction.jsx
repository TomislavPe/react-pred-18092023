export default function UserClass({ name, years, promijeni }) {
    return (
        <>
            <p>
                Pozdrav, moje ime je {name} i imam {years} godina
            </p>
            <input type="text" value={name} onChange={promijeni} />
        </>
    );
}
