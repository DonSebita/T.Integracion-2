import conexionBD from "@/lib/cxDB";
import { Db, ObjectId } from 'mongodb';

/**
* API to delete a product.
*/
export default async (req, res) => {
    
    try {
        // Get the connection to the database.
        const db = await conexionBD();
        // Check if db is a database object.
        if (db instanceof Db) {
            // Delete a product in the collection by _id.
            db.collection('clients').deleteOne({ "_id": ObjectId(req.body._id) });
        }
        // Return 200 if everything was successful.
        res.status(200).json("Successful!");
    } catch (e) {
        // Return 500 if there is an error.
        res.status(500).json("Error!");
        console.error(e);
    }
}
