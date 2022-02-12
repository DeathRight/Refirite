import Card from "@app/components/common/Card";
import Center from "@app/components/common/Center";
import LoadingOverlay from "@app/components/LoadingOverlay";
import {
  doc,
  enableIndexedDbPersistence,
  initializeFirestore,
} from "firebase/firestore";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {
  FirestoreProvider,
  SuspenseWithPerf,
  useFirestore,
  useFirestoreDocDataOnce,
  useInitFirestore,
} from "reactfire";

const FirestoreWrapper: FunctionComponent = ({ children }) => {
  const { data: firestoreInstance } = useInitFirestore(async (firebaseApp) => {
    const db = initializeFirestore(firebaseApp, {});
    await enableIndexedDbPersistence(db);
    return db;
  });

  return (
    <FirestoreProvider sdk={firestoreInstance}>{children}</FirestoreProvider>
  );
};

const StaticValue = () => {
  const firestore = useFirestore();
  const ref = doc(firestore, "pages/about");
  const { data } = useFirestoreDocDataOnce(ref);

  let { body } = data as { body: string };
  body = body.split("\\n").join("\n");

  return <div style={{ whiteSpace: "pre-line" }}>{body}</div>;
};

const About = () => (
  <SuspenseWithPerf fallback={<LoadingOverlay />} traceId="firestore-demo">
    <FirestoreWrapper>
      <Center>
        <Card>
          <SuspenseWithPerf
            fallback="connecting to Firestore..."
            traceId="firestore-demo-doc"
          >
            <StaticValue />
            <hr />
            <Link to="/">Home</Link>
          </SuspenseWithPerf>
        </Card>
      </Center>
    </FirestoreWrapper>
  </SuspenseWithPerf>
);
export default About;
