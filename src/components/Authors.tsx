// Renders an author list with the lab's corresponding author bolded.
// Shared by Home and Publications so both pages stay visually consistent.

const CORRESPONDING_AUTHOR = 'J.K. Yoo'

export default function Authors({ text }: { text: string }) {
  const parts = text.split(CORRESPONDING_AUTHOR)
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <strong className="font-bold">{CORRESPONDING_AUTHOR}</strong>}
        </span>
      ))}
    </>
  )
}
