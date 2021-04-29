import styled from 'styled-components'

const Spinner = styled.div`

`

export const LoadingPage = ({ height }: string | undefined | any) => {
  return (
    <div style={{ width: '100%', height: `${height}`, justifyContent: 'center', alignItems: 'center', display: 'flex', fontWeight: 200 }}>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
