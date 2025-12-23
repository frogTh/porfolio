'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface CodeTypingProps {
    code: string;
    language?: string;
    fileName?: string;
    typingSpeed?: number;
    startDelay?: number;
    showCursor?: boolean;
    className?: string;
    onComplete?: () => void;
}

interface Token {
    text: string;
    className: string;
}

// Tokenize code for syntax highlighting
const tokenizeLine = (line: string): Token[] => {
    const tokens: Token[] = [];
    let remaining = line;

    const patterns: [RegExp, string][] = [
        // Comments first (highest priority)
        [/^(\/\/.*)/, 'text-zinc-500 italic'],
        // Strings (separate patterns for each quote type)
        [/^`(?:[^`\\]|\\.)*?`/, 'text-green-400'],
        [/^"(?:[^"\\]|\\.)*?"/, 'text-green-400'],
        [/^'(?:[^'\\]|\\.)*?'/, 'text-green-400'],
        // Keywords
        [/^(const|let|var|function|return|import|export|from|default|async|await|if|else|for|while|class|extends|interface|type|enum|true|false|null|undefined|new|this|super|static|public|private|protected|readonly)\b/, 'text-purple-400'],
        // Numbers
        [/^(\d+(?:\.\d+)?)/, 'text-orange-400'],
        // Function calls (word followed by opening paren)
        [/^([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/, 'text-cyan-400'],
        // Operators
        [/^([=+\-*/<>!&|?:]+)/, 'text-yellow-400'],
        // Brackets
        [/^([\[\]{}()])/, 'text-zinc-300'],
        // Variable names and other identifiers
        [/^([a-zA-Z_$][a-zA-Z0-9_$]*)/, 'text-zinc-100'],
        // Whitespace
        [/^(\s+)/, ''],
        // Punctuation
        [/^([.,;])/, 'text-zinc-400'],
        // Any other character
        [/^(.)/, 'text-zinc-300'],
    ];

    while (remaining.length > 0) {
        let matched = false;

        for (const [pattern, className] of patterns) {
            const match = remaining.match(pattern);
            if (match) {
                tokens.push({ text: match[0], className });
                remaining = remaining.slice(match[0].length);
                matched = true;
                break;
            }
        }

        if (!matched) {
            tokens.push({ text: remaining[0], className: 'text-zinc-300' });
            remaining = remaining.slice(1);
        }
    }

    return tokens;
};

const CodeTyping: React.FC<CodeTypingProps> = ({
    code,
    language = 'typescript',
    fileName = 'app.tsx',
    typingSpeed = 50,
    startDelay = 500,
    showCursor = true,
    className,
    onComplete,
}) => {
    const [charIndex, setCharIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const startTyping = async () => {
            await new Promise(resolve => setTimeout(resolve, startDelay));

            const typeCharacter = () => {
                setCharIndex(prev => {
                    if (prev < code.length) {
                        const randomDelay = typingSpeed + Math.random() * 10 - 5;
                        setTimeout(typeCharacter, randomDelay);
                        return prev + 1;
                    } else {
                        setIsComplete(true);
                        onComplete?.();
                        return prev;
                    }
                });
            };

            typeCharacter();
        };

        startTyping();
    }, [code, typingSpeed, startDelay, onComplete]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [charIndex]);

    // Get the currently visible code
    const displayedCode = code.slice(0, charIndex);
    const lines = displayedCode.split('\n');

    // Pre-tokenize all lines for consistent rendering
    const tokenizedLines = useMemo(() => {
        return lines.map(line => tokenizeLine(line));
    }, [displayedCode]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                'relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm shadow-2xl',
                className
            )}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                    </div>
                    <span className="text-sm text-zinc-400 font-mono">{fileName}</span>
                </div>
                <span className="text-xs text-zinc-500 font-mono px-2 py-1 rounded bg-zinc-800/50">
                    {language}
                </span>
            </div>

            {/* Code content */}
            <div
                ref={containerRef}
                className="p-4 overflow-auto max-h-[300px] font-mono text-sm leading-relaxed"
            >
                <div className="flex">
                    {/* Line numbers */}
                    <div className="select-none pr-4 text-right text-zinc-600 border-r border-zinc-800 mr-4">
                        {lines.map((_, index) => (
                            <div key={index} className="leading-relaxed">
                                {index + 1}
                            </div>
                        ))}
                    </div>

                    {/* Code */}
                    <div className="flex-1">
                        {tokenizedLines.map((tokens, lineIndex) => (
                            <div key={lineIndex} className="leading-relaxed whitespace-pre">
                                {tokens.map((token, tokenIndex) => (
                                    <span key={tokenIndex} className={token.className}>
                                        {token.text}
                                    </span>
                                ))}
                                {showCursor && lineIndex === lines.length - 1 && !isComplete && (
                                    <motion.span
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="inline-block w-[2px] h-[1.2em] bg-cyan-400 ml-[1px] align-middle"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            </div>
        </motion.div>
    );
};

export default CodeTyping;
