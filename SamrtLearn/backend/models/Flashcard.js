import mongoose from "mongoose";

const flashcardScheme = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        documentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Document",
            required: true
        },
        cards: [
            {
                question: { type: String, required: true},
                answer: { type: String, required: true},
                diffculty: {
                    type: String,
                    enum: ["easy", "medium", "hard"],
                    default: "medium"
                },
                lastReviewed: {
                    type: Date,
                    default: null
                },
                reviewCount: {
                    type: Number,
                    default: 0
                },
                isStarred: {
                    type: Boolean,
                    default: false
                }

            }
        ]
    },
    {
        timestamps: true
    }
)

flashcardScheme.index({ userId: 1, documentId: 1});

const Flashcard = mongoose.model('FlashCard', flashcardScheme);

export default Flashcard;