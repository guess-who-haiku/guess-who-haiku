import React, {Fragment} from 'react'
import SolvedHaiku from '../solve_haiku/SolvedHaiku';
import SolveHaiku from '../solve_haiku/SolveHaikuContainer';

export default function Haiku({currentUser, solved, creator, users}) {
    console.log("currentUser", currentUser);
    console.log("solved", solved);
    console.log("creator", creator);
    const determineHaikuShow = () => {
        //if creator of haiku      //not tested
        if (creator) return (
                      <>
                        <p>
                          Challenge a friend (or a few friends) to solve your
                          haiku by choosing them below, or generating a link and
                          sending it to them.
                        </p>
                        {/* <ul>
                          {users &&
                            users.map(user => (
                              <li
                                data-selected={haikuShares.includes(
                                  user.username
                                )}
                                key={user.username}
                                data-username={user.username}
                                onClick={handleShareSelection}
                              >
                                <strong>{user.username}</strong>
                              </li>
                            ))}
                        </ul> */}
                        <button>Share</button>
                        {/* set input value to current haiku id */}
                        <input type="text" name="link" />
                        <button>Share via link</button>
                      </>
                    );
        //if not logged in or unsolved     //not tested
        if (!currentUser || !solved) return <SolveHaiku />;
        //if solved     //not tested
        if (solved) return <SolvedHaiku />;
    }

    return (
        <div>
            {determineHaikuShow()}
        </div>
    )
}
