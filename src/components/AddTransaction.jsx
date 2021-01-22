import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add Transactions</h3>
            <form>
                <label>
                    Add Details
                </label><br/>
                <input type='text'></input><br/>
                <label>
                    Add Amount
                </label><br/>
                <input type='text'></input><br/>
                <input type='submit'></input><br/>
            </form>
        </div>
    )
}
