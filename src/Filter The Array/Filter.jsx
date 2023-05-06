// create a reactjs component to perform filter operation on an array take array of your on 


const Filter = () => {

    let array = [1,2,3,4,5,6,7,8,9,10,11,12];

    //filter the even val

    let ans = array.filter((val) => val%2 !== 0);

    const store = ans.map((val) => <span>{val + " "}</span>)

  return (
    <>
        {store}
    </>
  )
}

export default Filter