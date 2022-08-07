import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";

import AdminWrap from "../wrapper/AdminWrap";
import { Header } from "../components";

let duration = 0.25;

function ResizeablePanel() {
  let [foo, setFoo] = useState(false);
  let [count, setCount] = useState(0);

  return (
    <MotionConfig transition={{ duration }}>
      <div className="Container">
        <Header category="Page" title="Resizeable Panel" />
        <div className="Panel-Container">
          {" "}
          <div className="other">
            <p>
              a Resizeable Panel animation, using react state, that is not
              triggerd by re - render.
            </p>
          </div>
          <div className="Panel">
            <h1>Panel</h1>
            <div className="buttons">
              <button onClick={() => setCount(count + 1)}>Toggle</button>
              <button onClick={() => setFoo(!foo)}>
                Rerender ({foo ? "y" : "n"})
              </button>
            </div>

            <ResizablePanel>
              {count % 3 === 2 ? (
                <p>
                  And something longer. Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              ) : count % 3 === 1 ? (
                <p>
                  Something a bit longer. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Repudiandae modi vel odio.
                </p>
              ) : (
                <p>Something short.</p>
              )}
            </ResizablePanel>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

function ResizablePanel({ children }) {
  let [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={{ height: height || "auto" }}
      className="ResizablePanel"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{
            // opacity: 0,
            x: 382,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: duration / 2, delay: duration / 2 },
          }}
          exit={{
            opacity: 0,
            x: -382,
            transition: { duration: duration / 2 },
          }}
        >
          <div
            ref={ref}
            className={`${height ? "absolute" : "relative"} child`}
          >
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.
  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};

export default AdminWrap(ResizeablePanel, "panel");
