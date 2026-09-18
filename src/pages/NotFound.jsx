import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MapPin, Clock, Mail, ArrowUpRight, Music, Users, Landmark, X, ChevronLeft, ChevronRight, Send, CheckCircle, Camera, BookOpen, GlassWater, Heart, CalendarDays } from 'lucide-react';
import { Container, Section, Eyebrow, Heading, Body, Button, PageHero, Reveal } from '../components/UI';
import { photos, activities, palette } from '../data/site';



export function NotFound(){return <Section><Container><div style={{paddingTop:110,minHeight:'65vh'}}><Eyebrow>404</Eyebrow><Heading>Denne siden finnes ikke.</Heading><Body>Du kan gå tilbake til forsiden.</Body><Button to="/">Til forsiden</Button></div></Container></Section>}

