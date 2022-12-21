import React, {
  createContext,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import useSwr, { useSWRConfig } from "swr";

const TrumpExample = () => {
  // const [quote, setQuote] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await fetch(
  //         "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
  //       );
  //       const json = await res.json();
  //       setQuote(json.message);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);

  const [counter, setCounter] = useState(0);

  const { cache, mutate, ...extraConfig } = useSWRConfig();

  const { data, error } = useSwr(
    `https://api.whatdoestrumpthink.com/api/v1/quotes/random`,
    (url) => {
      console.log(cache);

      if(cache.get(url)) {
        return cache.get(url)
      }

      return fetch(url).then((r) => r.json());
    }
  );

  if (!data) {
    return <p>Loader ....</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <p
      onClick={() => {
        setCounter((prev) => prev + 1);
      }}
    >
      {data.message} {counter}
    </p>
  );
};

const T = () => {
  const [count, setCount] = useState(90);
  const [on, setOn] = useState(false);
  let int = useRef<any>(0);

  useEffect(() => {
    console.log(int);
    if (on) {
      int.current = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(int.current);
    }
  }, [on]);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setOn((prev) => !prev)}>Click</button>
    </>
  );
};

const Header = () => {
  const context = useContext(AppContext);
  return <p>{context.val}</p>;
};

const AnyOtherInput = () => {
  return <Input2 />;
};

const Input2 = () => {
  const context = useContext(AppContext);

  return (
    <input
      value={context.val}
      onChange={(e) => context.setValue(e.currentTarget.value)}
    />
  );
};

export const AppContext = createContext<{
  val: string;
  setValue: React.Dispatch<string>;
  hehe: string;
}>({
  val: "",
  setValue: () => null,
  hehe: "hehe",
});

const App = () => {
  const [x, setX] = useState("");

  return (
    <AppContext.Provider value={{ val: x, setValue: setX, hehe: "hehe" }}>
      <Header />
      <AnyOtherInput />
      <T />
      <TrumpExample />
    </AppContext.Provider>
  );
};

export default App;

// const Label = ({ children }: { children: React.ReactNode }) => {
//   return <label>{children}</label>;
// };

// const Input = ({
//   name,
//   value,
//   onChange,
// }: {
//   name: string;
//   value: string;
//   onChange: React.Dispatch<any>;
// }) => {
//   return (
//     <input
//       onChange={onChange}
//       className="form-control"
//       name={name}
//       value={value}
//     ></input>
//   );
// };

// function App() {
//   const defualtState = {
//     name: "",
//     lang: "",
//     bio: "",
//   };

//   const inputRef = useRef<HTMLInputElement>(null);
//   const [error, setErrors] = useState(defualtState);
//   const [form, setForm] = useState(defualtState);

//   const handleChange = (e: React.FormEvent<any>) => {
//     console.log(e.currentTarget.value);

//     const { value, name } = e.currentTarget;

//     setForm((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // if (inputRef?.current) {
//     //   console.log(inputRef.current.value);
//     // }

//     let valid = true;
//     const er = defualtState;

//     if (!form.name) {
//       valid = false;
//       er.name = "Brak imienia";
//     }

//     if (!form.lang) {
//       valid = false;
//       er.lang = "Brak języka";
//     }

//     if (!form.bio) {
//       valid = false;
//       er.bio = "Brak bio";
//     }

//     if (valid) {
//       console.log("Success");
//       setErrors(defualtState);
//       return;
//     }

//     setErrors(er);
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>
//               Name
//               {/* <input
//                 ref={inputRef}
//                 onChange={handleChange}
//                 className="form-control"
//                 name="name"
//                 value={form.name}
//               ></input> */}
//               <Input value={form.name} onChange={handleChange} name={"name"} />
//             </label>
//             {error?.name && <p>{error?.name}</p>}
//           </div>
//           <div className="form-group">
//             <label>
//               Prefered language
//               <select
//                 className="form-control"
//                 value={form.lang}
//                 onChange={handleChange}
//                 name="lang"
//               >
//                 <option>JS</option>
//                 <option>Java</option>
//                 <option>Everything</option>
//               </select>
//             </label>
//             {error?.lang && <p>{error?.lang}</p>}
//           </div>
//           <div className="form-group">
//             <label>
//               Bio
//               <textarea
//                 className="form-control"
//                 value={form.bio}
//                 onChange={handleChange}
//                 name={"bio"}
//               />
//             </label>
//             {error?.bio && <p>{error?.bio}</p>}
//           </div>
//           <button className="btn btn-primary">Send</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// // export default App;
