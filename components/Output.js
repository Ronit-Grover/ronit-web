const Output = ({ output }) => {
  return output ? <p dangerouslySetInnerHTML={{ __html: output }}></p> : <></>
}

export default Output
